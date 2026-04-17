import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { RiDraggable } from 'react-icons/ri'
import { useResume } from '../context/ResumeContext'
import type { ResumeSection } from '../types'

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function scrollToSection(sectId: string) {
  const el = document.getElementById(`section-${sectId}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function SortableItem({ section, onSectionClick }: { section: ResumeSection; onSectionClick?: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: section.sectId,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li ref={setNodeRef} style={style} className="sortable-item" {...attributes}>
      <div
        className="sortable-item-content"
        onClick={() => { scrollToSection(section.sectId); onSectionClick?.() }}
        style={{ cursor: 'pointer' }}
      >
        <span>{capitalize(section.sectId)}</span>
        <span
          {...listeners}
          className="drag-handle"
          onClick={(e) => e.stopPropagation()}
          aria-label="Drag to reorder"
        >
          <RiDraggable size={16} />
        </span>
      </div>
    </li>
  )
}

export default function SortableSectionList({ onSectionClick }: { onSectionClick?: () => void }) {
  const { sections, setSections } = useResume()
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.sectId === active.id)
      const newIndex = sections.findIndex((s) => s.sectId === over.id)
      setSections(arrayMove(sections, oldIndex, newIndex))
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sections.map((s) => s.sectId)} strategy={verticalListSortingStrategy}>
        <ul className="section-list">
          {sections.map((sect) => (
            <SortableItem key={sect.sectId} section={sect} onSectionClick={onSectionClick} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  )
}
